export const ModalContext = {} as {
  prompt: (opts: {
    title: string;
    message: string;
    confirmText?: string;
    rejectText?: string;
  }) => Promise<boolean>;
};
