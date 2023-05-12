export const LOGIN_REGEXP = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/
export const PASSWORD_REGEXP =
  /(?<!\S)(?=\S{8,20}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/
export const FULL_NAME_REGEXP = /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/
export const PUBLIC_NAME_REGEXP = FULL_NAME_REGEXP
export const PHONE_REGEXP = /^\+*\d{10,15}$/
