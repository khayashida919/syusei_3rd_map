import { forwardRef, Textarea, TextareaProps } from '@chakra-ui/react';

type BaseTextAreaProps = TextareaProps;

export const BaseTextArea = forwardRef<BaseTextAreaProps, 'textarea'>(
  ({ ...props }, ref) => {
    return <Textarea {...props} ref={ref}></Textarea>;
  },
);
