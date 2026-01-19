import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type InputFieldOnChangeEvent = (
  e: React.ComponentProps<typeof Input> | React.ComponentProps<typeof Textarea>,
) => void;

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required: boolean;
  onChange: InputFieldOnChangeEvent;
  error: string[];
  helperText?: string;
  textarea?: boolean;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
  textarea,
}: FormFieldProps) => {
  const InputField = textarea ? Textarea : Input;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />

      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}

      {error && <p className="text-sm text-destructive">{error.join(", ")}</p>}
    </div>
  );
};
