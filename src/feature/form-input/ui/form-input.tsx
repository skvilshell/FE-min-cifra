import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export interface FormInputProps {
   value: string
   labelText: string
}

export function FormInput({
   value,
   labelText,
}: FormInputProps) {
   return (
      <div>
         <Label
            htmlFor={value}
         >
            {labelText}
         </Label>
         <Input
            id={value}
         />
      </div>
   )
}