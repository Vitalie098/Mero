import { BaseToast, type BaseToastProps } from "react-native-toast-message"
import ToastSuccess from "./components"

export const toastConfig = {
  success: (props: BaseToastProps) => <ToastSuccess props={props}/>,
  error: (props: BaseToastProps) => <BaseToast {...props} />,
  info: (props: BaseToastProps) => <BaseToast {...props} />,
}
