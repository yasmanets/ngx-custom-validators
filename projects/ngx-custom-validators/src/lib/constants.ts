// RegExp File
// tslint:disable-next-line: max-line-length
export const EMAIL_REGEXP: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
// tslint:disable-next-line: max-line-length
export const URL_REGEXP: RegExp = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const IBAN_REGEXP = /^[A-Za-z]{2}\d{20}$/;
export const CIF_REGEXP = /^[A-Za-z]{1}\d{8}/;
export const DNI_REGEXP = /^\d{8}[A-Za-z]{1}/;
