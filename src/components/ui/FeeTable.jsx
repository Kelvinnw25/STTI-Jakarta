import { rupiah, totalFee } from '../../data/programs'

/** Tabel biaya per program studi. Di layar sempit tiap baris berubah menjadi kartu berlabel. */
export default function FeeTable({ programs, caption }) {
  return (
    <div className="fee-wrap">
      <p className="fee-wrap__caption">{caption}</p>
      <table className="fee-table" aria-label={caption}>
        <thead>
          <tr>
            <th scope="col">Program Studi</th>
            <th scope="col">Biaya Pendaftaran</th>
            <th scope="col">Biaya Kuliah</th>
            <th scope="col">Total Pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr key={p.id}>
              <th scope="row" data-label="Program Studi">
                {p.label ?? p.name}
              </th>
              <td data-label="Biaya Pendaftaran">{rupiah(p.registrationFee)}</td>
              <td data-label="Biaya Kuliah">{rupiah(p.tuition)}</td>
              <td data-label="Total Pembayaran" className="fee-table__total">
                {rupiah(totalFee(p))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
