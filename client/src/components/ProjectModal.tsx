import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  url,
}: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 border-0 bg-transparent shadow-none">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full rounded-2xl overflow-hidden glass-border">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors glass"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Title */}
          <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-lg glass">
            <h3 className="text-white font-semibold text-sm">{title}</h3>
          </div>

          {/* Iframe */}
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
