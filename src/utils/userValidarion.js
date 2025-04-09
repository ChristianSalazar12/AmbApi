async function validateLoginData({ document, password }) {
  if (!document || !password) {
    return {
      isValid: false,
      error: "Documento y contraseña son requeridos.",
    };
  }

  if (typeof document !== "string" || typeof password !== "string") {
    return {
      isValid: false,
      error: "Datos inválidos en documento o contraseña.",
    };
  }

  // Validar que el documento sea numérico y tenga al menos 6 dígitos
  const isDocumentValid = /^\d{6,}$/.test(document);
  if (!isDocumentValid) {
    return {
      isValid: false,
      error: "El documento debe tener al menos 6 dígitos numéricos.",
    };
  }

  return { isValid: true };
}
module.exports = {
  validateLoginData,
};
