export type FormProps = {
  serverName: string,
  serverType: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  setServerName: React.Dispatch<React.SetStateAction<string>>,
  setServerType: React.Dispatch<React.SetStateAction<string>>
}