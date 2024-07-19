import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSettingDialog({ selectedItem, setOpen }: any) {
  const [showAPIKey, setShowAPIKey] = useState(false);
  const [showButtonStack, setShowButtonStack] = useState(true);
  const [isIntegrationActive, setIsIntegrationActive] = useState(false);
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      name: "OpenAI ChatGPT",
      provider: "ChatGPT",
      apiKey: "abcdefghijklmnop",
      Modals: ["ChatGPT"],
      EnabledTo: ["Apex User"],
      IntegrationActive: true,
    },
  });

  const onSubmit = (data: any) => {
    setIsIntegrationActive(false);
    setShowButtonStack(true);
    setOpen(false);
  };

  const handleDelete = (event: any, chipToDelete: any, field: any) => {
    const updatedValues = field.value.filter(
      (chip: any) => chip !== chipToDelete
    );
    field.onChange(updatedValues);
  };

  return {
    showAPIKey,
    setShowAPIKey,
    handleDelete,
    onSubmit,
    handleSubmit,
    control,
    showButtonStack,
    isIntegrationActive,
    setIsIntegrationActive,
    setShowButtonStack,
  };
}
