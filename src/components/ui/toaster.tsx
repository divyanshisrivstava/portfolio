import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();
  const hasOpenToast = toasts.some(toast => toast.open !== false);

  return (
    <ToastProvider>
      {hasOpenToast && (
        <div className="fixed inset-0 bg-black/50 z-[99] animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
      )}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="w-full">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
