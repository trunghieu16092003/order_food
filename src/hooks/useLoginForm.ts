import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface LoginFormStateType {
  email: string;
  password: string;
}

const defaultValues: LoginFormStateType = {
  email: "",
  password: "",
};

const schema = Yup.object({
  email: Yup.string().trim().required("email is required"),
  password: Yup.string()
    .required("Phone is required")
    .min(10, "Phone must be at least 10 characters"),
});

type FormType = Yup.InferType<typeof schema>;

export default function useLoginForm() {
  const { register, handleSubmit, formState } = useForm<FormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, formState };
}
