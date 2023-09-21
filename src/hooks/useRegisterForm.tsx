import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface LoginFormStateType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: LoginFormStateType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = Yup.object({
  username: Yup.string().trim().required("userame is required"),
  email: Yup.string().trim().required("email is required"),
  password: Yup.string()
    .required("field is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), "not compare"]),
});

type FormType = Yup.InferType<typeof schema>;

export default function useLoginForm() {
  const { register, handleSubmit, formState, reset } = useForm<FormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, formState, reset };
}
