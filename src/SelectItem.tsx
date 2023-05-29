import { Container, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void
};

export function SelectItem({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container maxWidth="sm">
      <Typography>{value?.label}</Typography>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <div>
        <ul>
          {options.map(option => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
