const RiwayatPekerjaan = () => {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl">Riwayat Pekerjaan</h2>
            <RowRiwayat kerja="Mitra Kurir" instansi="Ekspedisi" tahun="2020-2022" />
        </div>
    )
}

interface RowRiwayatProps {
    kerja: string;
    instansi: string;
    tahun: String;
}

const RowRiwayat = (props: RowRiwayatProps) => {
    return (
        <div className="border-2 border-pink-800 rounded-lg bg-orange-100 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black">{props.kerja}</div>
                    <div className="col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black">{props.instansi}</div>
                    <div className="col-span-12 md:col-span-4 underline decoration-pink-800 decoration-4 font-semibold text-black">{props.tahun}</div>
                </div>
            </div>
        </div>
    )
}

export default RiwayatPekerjaan;