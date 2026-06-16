import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';

export const Toast = ({ toasts, removeToast }) => {
  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex flex-col gap-2"
      role="region"
      aria-label="Notifications"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem = ({ toast, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(onRemove, toast.duration || 4000);
    return () => clearTimeout(timer);
  }, [toast, onRemove]);

  const styles = {
    success: 'border-gold-luxury bg-emerald-deep text-white',
    error: 'border-red-500/50 bg-red-950/90 text-white',
    info: 'border-gold-luxury/50 bg-salon-card text-white',
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-start gap-3 p-4 border backdrop-blur-md rounded-sm shadow-card max-w-sm font-body ${styles[toast.type || 'info']}`}
      role="alert"
    >
      <span className="text-gold-luxury font-bold text-lg leading-none mt-0.5">
        {icons[toast.type || 'info']}
      </span>
      <div className="flex-1 min-w-0">
        {toast.title && <p className="font-semibold text-sm mb-0.5">{toast.title}</p>}
        <p className="text-sm text-salon-muted">{toast.message}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-salon-muted hover:text-white transition-colors ml-2 flex-shrink-0"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </motion.div>
  );
};

// Hook
import { useState, useCallback } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};
