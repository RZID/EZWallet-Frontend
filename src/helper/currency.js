const currency = {
    methods: {
        toRupiah(number) {
            return parseInt(number).toLocaleString("id-ID");
        }
    }
}
export default currency