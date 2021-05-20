# SOLID-Principles-using-Typescript

## **Single Responsibility Principle - SRP**

> A class should be having one and only one responsibility
>
> A class should have one and only one reason to change 
>

Dalam satu class hanya boleh memiliki satu tanggung jawab. Misalkan class bertanggung jawab me-manage table *User*, maka tidak boleh dibebani lagi dengan tabel *Order*. Managemen *Order* harus di class terpisah.

## **Open/Close Principle - OCP**

>Entitas (class, modules, functions etc.) should be open for exstension but closed for modification
>

Class/function harus dapat di-extend fungsinya tanpa merubah kode didalamnya.

## **Liskov Subtitution Principle - SLP**

>Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it
>

Class harus bisa di-switch dengan class turunannya tanpa menyebabkan kesalahan logic ataupun teknis.

Misalkan base class "Bird", turunannya ada "Sparrow" dan "Kiwi". Sparrow bisa terbang sedangkan Kiwi tidak.

Kita harus membuatkan base khusus untuk burung yang bisa terbang misalkan "FlyingBird" dimana "Sparrow" akan extends ke "FlyingBird" dan "Kiwi" akan extends ke "Bird"

## **Interface Segregation Principle**

>Clients should not be force to depends upon interfaces that they do not use
>

Mirip dengan SRP, Namun penerapannya pada interface. Interface tidak boleh memiliki banyak function sehingga memaksa client untuk mengimplementasi semua fucntion, Karena ada kemungkinan function tidak dibutuhkan dalam class

## **Dependency Inversion Principle - DIP**

>A. High level modules should not depend upon low level modules. both should depend upon abstractios.
>
>B. Abstraction should not depend upon deteils. Details should depend upon abstraction.
>