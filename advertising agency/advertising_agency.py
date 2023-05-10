
from tkinter import *
import tkinter as tk
from tkinter import ttk     # подключаем пакет ttk
from datetime import datetime
from tkinter.messagebox import showinfo

 
root = Tk()     # создаем корневой объект - окно
root.title("Рекламная компания")     # устанавливаем заголовок окна
root.geometry("400x400")    # устанавливаем размеры окна
root.resizable(False, False)

label = ttk.Label(text="Рекламная компания", font=("Arial", 10))
label.place(x=60, y=100)

btn_user = ttk.Button(text="Клиенты", width = "15")
btn_user.place(x=60, y=300)



def click_user(event):

    user = Tk()
    user.title("Клиенты")
    user.geometry("640x440")
    user.resizable(False, False)

    btn_new_user = ttk.Button(user, text="Добавить клиента")
    btn_new_user.place(x=20, y=20)


    def click_new_user(event):
        new_user = Tk()
        new_user.title("Добавление нового клиента")
        new_user.geometry("400x300")
        new_user.resizable(False, False)      

        label = ttk.Label(new_user, text="ФИО клиента", font=("Arial", 10))
        label.place(x=60, y=20)

        entry_name = ttk.Entry(new_user, width = "45")
        entry_name.place(x=60, y=40)

        label = ttk.Label(new_user, text="Номер телефона клиента", font=("Arial", 10))
        label.place(x=60, y=70)

        entry_phone = ttk.Entry(new_user, width = "45")
        entry_phone.place(x=60, y=90)

        label = ttk.Label(new_user, text="Почта клиента", font=("Arial", 10))
        label.place(x=60, y=120)

        entry_mail = ttk.Entry(new_user, width = "45")
        entry_mail.place(x=60, y=140)

        label = ttk.Label(new_user, text="Дата рождения клиента", font=("Arial", 10))
        label.place(x=60, y=170)

        entry_date = ttk.Entry(new_user, width = "45")
        entry_date.place(x=60, y=190)

        btn_ok = ttk.Button(new_user, text="Добавить")
        btn_ok.place(x=110, y=245)

        def closing():
            new_user.destroy()

        btn_close = ttk.Button(new_user, text="Закрыть", command=closing)
        btn_close.place(x=210, y=245)

        new_user.mainloop()


    btn_new_user.bind("<Button-1>", click_new_user)    #выполняет команду

    tree = ttk.Treeview(user, columns=('ID', 'name', 'phone', 'mail', 'date'), height=15, show='headings')
    tree.column("ID", width=30)
    tree.column("name", width=260)
    tree.column("phone", width=110)
    tree.column("mail", width=100)
    tree.column("date", width=100)

    tree.heading("ID", text='ID')
    tree.heading("name", text='ФИО')
    tree.heading("phone", text='Номер телефона')
    tree.heading("mail", text='Почта')
    tree.heading("date", text='Дата рождения')
    
    tree.place(x=20, y=50)

    def closing():
        user.destroy()

    btn_back = ttk.Button(user, text="Назад", command=closing)
    btn_back.place(x=540, y=400)

    user.mainloop()


btn_user.bind("<Button-1>", click_user)    


btn_tovar = ttk.Button(text="Рекламное место", width = "15") 
btn_tovar.place(x=240, y=300)

def click_tovar(event):

    window = Tk()
    window.title("Рекламное место")
    window.geometry("400x400")

btn_tovar.bind("<Button-1>", click_tovar)    

root.mainloop()
