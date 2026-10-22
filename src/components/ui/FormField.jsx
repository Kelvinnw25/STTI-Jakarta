/**
 * Bidang formulir berlabel dengan pesan galat yang terhubung lewat aria-describedby.
 * `as`: input (default) | select | textarea.
 */
export default function FormField({
  id,
  label,
  as = 'input',
  error,
  hint,
  required = false,
  options,
  className = '',
  ...rest
}) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  const common = {
    id,
    name: id,
    required,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy,
    className: 'field__control',
    ...rest,
  }

  let control
  if (as === 'select') {
    control = (
      <select {...common}>
        <option value="">Pilih…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    )
  } else if (as === 'textarea') {
    control = <textarea rows={6} {...common} />
  } else {
    control = <input {...common} />
  }

  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="field__req" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {control}
      {hint && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}
