import Swal from 'sweetalert2'
const alert = {
    data: () => {
        return {
            config: Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
        }
    },
    methods: {
        ToastSuccess (message) {
            this.config.fire({
                icon: 'success',
                title: message
            })
        },
        ToastError (message) {
            this.config.fire({
                icon: 'error',
                title: message
            })
        },
        AlertConfirm (title, text) {
            return new Promise(resolve => {
                Swal.fire({
                    title: title,
                    text: text,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        resolve(true)
                    }
                })
            })
        }
    }
}
export default alert