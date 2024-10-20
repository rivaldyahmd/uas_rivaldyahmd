const RiwayatPendidikan = () => {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl">Riwayat Pendidikan</h2>
            <RowRiwayat jenjang="SD" sekolah="SDN 2 Majalaya" tahun="2007-2013" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Paseh" tahun="2013-2016" />
            <RowRiwayat jenjang="SMA" sekolah="SMAN 1 Majalaya" tahun="2016-2019" />
            <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun="2022-Sekarang" />
        </div>
    )
}

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: String;
}

const RowRiwayat = (props: RowRiwayatProps) => {
    return (
        <div className="border-2 border-pink-800 rounded-lg bg-orange-100 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4 font-semibold text-black">{props.jenjang}</div>
                    <div className="col-span-12 md:col-span-4 font-semibold text-black">{props.sekolah}</div>
                    <div className="col-span-12 md:col-span-4 font-semibold text-black">{props.tahun}</div>
                </div>
            </div>
        </div>
    )
}


export default RiwayatPendidikan;