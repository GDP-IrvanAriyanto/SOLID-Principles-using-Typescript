    class User {
        
        /**
         * Kode belum memehuni kaidah Single Responsibility Princile (SRP)
         * Dalam satu kelas memiliki banyak tanggung jawab (user, order, diskon)
         */

        // create(user: User) {
        //     // Kode untuk membuat user
        // }

        // createOrder(order: Order) {
        //     // Kode untuk membuat order
        // }

        // cancelOrder(order: Order) {
        //     // Kode untuk membatalkan order
        // }

        // countDiscount(order: Order) {
        //     // Kode untuk menghitung diskon
        // }

        // Refactor mengihkuti kaidah SRP

        create(user: User): void {
            // Kode membuat user
        }

    }