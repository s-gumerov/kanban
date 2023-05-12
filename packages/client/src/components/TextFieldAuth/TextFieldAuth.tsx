import { TextField } from '@mui/material'
import { useField } from 'formik'
import { TextFieldProps } from '@mui/material'
import { TEXT_FIELD_AUTH_STYLES } from './const'

export const TextFieldAuth = ({
  name,
  ...propsWithoutName
}: TextFieldProps): JSX.Element => {
  const [field, meta] = useField(name as string)

  const configTextField = {
    ...field,
    ...propsWithoutName,
  }

  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }

  return (
    <TextField
      {...configTextField}
      variant="standard"
      sx={TEXT_FIELD_AUTH_STYLES}
    />
  )
}
