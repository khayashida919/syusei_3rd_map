import { Flex, useDisclosure, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
  BaseButton,
  BaseFormLabel,
  BaseInput,
  BaseModal,
  BaseModalProps,
  BaseText,
  BaseTextArea,
  PrimaryButton,
  VerticalFormControl,
} from '@/components/ui';
import { useErrorToast } from '@/hooks';

export type ChangeQuantityButtonWithModalProps = {
  isLoading?: boolean;
  onSave: (values: ChangeQuantityFormValues) => void;
  quantity: number;
};

export const ChangeQuantityButtonWithModal: FC<
  ChangeQuantityButtonWithModalProps
> = ({ isLoading, onSave, quantity }) => {
  const { getButtonProps, isOpen, onClose } = useDisclosure();

  return (
    <>
      <BaseButton
        colorScheme="blue"
        p="1rem"
        textDecoration="underline"
        variant="link"
        {...getButtonProps()}
      >
        {quantity}
      </BaseButton>
      <ChangeQuantityModal
        isLoading={isLoading}
        isOpen={isOpen}
        key={quantity}
        quantity={quantity}
        onClose={onClose}
        onSave={onSave}
      />
    </>
  );
};

export type ChangeQuantityFormValues = {
  quantity: number;
  reason: string;
};

export type ChangeQuantityModalProps = BaseModalProps & {
  isLoading?: boolean;
  onSave: (values: ChangeQuantityFormValues) => void;
  quantity: number;
};

export const ChangeQuantityModal: FC<ChangeQuantityModalProps> = ({
  isLoading,
  isOpen,
  onClose,
  onSave,
  quantity,
  ...modalProps
}) => {
  const errorToast = useErrorToast();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ChangeQuantityFormValues>({
    defaultValues: { quantity, reason: '' },
  });

  const _onClose = () => {
    reset({ quantity, reason: '' });
    onClose();
  };

  const _onSave = (values: ChangeQuantityFormValues) => {
    if (values.quantity == quantity || !values.reason) {
      errorToast('エラー', '数量または変更理由を入力してください');
      return;
    }
    onSave(values);
    _onClose();
  };

  return (
    <BaseModal
      footer={
        <Flex gap="1rem" w="full">
          <BaseButton bg="none" color="primary.500" w="7rem" onClick={_onClose}>
            キャンセル
          </BaseButton>
          <PrimaryButton
            flex={1}
            isLoading={isLoading}
            onClick={handleSubmit(_onSave)}
          >
            保存する
          </PrimaryButton>
        </Flex>
      }
      isOpen={isOpen}
      size="md"
      title="数量変更"
      onClose={_onClose}
      {...modalProps}
    >
      <VStack alignItems="start">
        <VerticalFormControl
          errorMessage={errors.quantity?.message}
          label={
            <BaseFormLabel>
              <BaseText>数量</BaseText>
              <BaseText color="gray" fontSize="sm">
                変更後の数量を入力してください
              </BaseText>
            </BaseFormLabel>
          }
        >
          <BaseInput
            type="number"
            {...register('quantity', {
              required: { message: '数量を入力してください', value: true },
              valueAsNumber: true,
            })}
          />
        </VerticalFormControl>
        <VerticalFormControl
          label={
            <BaseFormLabel>
              <BaseText>変更理由</BaseText>
              <BaseText color="gray" fontSize="0.9rem">
                数量変更理由を入力してください
              </BaseText>
            </BaseFormLabel>
          }
        >
          <BaseTextArea {...register('reason')} />
        </VerticalFormControl>
      </VStack>
    </BaseModal>
  );
};
