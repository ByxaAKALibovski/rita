from tkinter import *
from tkinter import ttk     # подключаем пакет ttk
from datetime import datetime
from tkinter.messagebox import showinfo
 
root = Tk()     # создаем корневой объект - окно
root.title("Форма 1")     # устанавливаем заголовок окна
root.geometry("400x400")    # устанавливаем размеры окна

label = ttk.Label(text="Данные студента", font=("Arial", 10))
label.place(x=60, y=30)

label = ttk.Label(text="ФИО", font=("Arial", 10))
label.place(x=60, y=90)

entryA = ttk.Entry(width = "45")
entryA.place(x=60, y=120)

label = ttk.Label(text="Номер группы", font=("Arial", 10))
label.place(x=60, y=170)

entryB = ttk.Entry(width = "45")
entryB.place(x=60, y=200)

btn = ttk.Button(text="Старт", width = "15")
btn.place(x=60, y=300)
  
def click(event):
    A = entryA.get()     #сохраняем
    B = entryB.get()
    root.destroy()      #уничтожаем окно

    window = Tk()
    window.title("Новое окно")
    window.geometry("400x400")

    label = ttk.Label(window, text="Группа:", font=("Arial", 10))
    label.place(x=40, y=30)

    label = ttk.Label(window, text=B)
    label.place(x=100, y=30)

    label = ttk.Label(window, text="ФИО", font=("Arial", 10))
    label.place(x=40, y=100)

    label = ttk.Label(window, text=A)
    label.place(x=40, y=120)

    label = ttk.Label(window, text="Сейчас", font=("Arial", 10))
    label.place(x=40, y=190)

    a = Label(window, text=f"{datetime.now():%H:%M:%S}", font=("Arial", 10))
    a.place(x=40, y=210)

    b = Label(window, text=f"{datetime.now():%d.%m.%Y}", font=("Arial", 10))
    b.place(x=40, y=230)

    def closing():
        window.destroy()

    btn = ttk.Button(window, text="Выход", width = "10", command=closing) 
    btn.place(x=40, y=300)
    
    def open_info():
        showinfo(title="Информация о создателе программы", message="Программу разработала студентка гр. 20ИСТ1", detail="Семенова Маргарита Романовна")
    
    btn = ttk.Button(window, text="Сообщение о создателе", width = "25", command=open_info) 
    btn.place(x=115, y=300)

    img2 = PhotoImage(file="./img2.png")
    label = ttk.Label(window, image=img2)
    label.place(x=280, y=30)

    def info1():
        showinfo(title="Описание ноутбука", message="Ноутбук — переносной компьютер, в корпусе которого объединены типичные компоненты персонального компьютера, включая дисплей, клавиатуру и устройство указания, а также аккумуляторные батареи. Ноутбуки отличаются небольшими размерами и весом, время автономной работы ноутбуков варьируется.")

    btn = ttk.Button(window, text="Описание", width = "13", command=info1) 
    btn.place(x=280, y=110)

    img1 = PhotoImage(file="./img1.png")
    label = ttk.Label(window, image=img1)
    label.place(x=280, y=180)

    def info2():
        showinfo(title="Описание компьютера", message="Компьютер - это электронно-вычислительная машина (ЭВМ); программно-аппаратный комплекс для обработки больших объемов информации при решении различного рода задач.")

    btn = ttk.Button(window, text="Описание", width = "13", command=info2) 
    btn.place(x=280, y=300)

    window.mainloop()

btn.bind("<Button-1>", click)    #выполняет команду

def closing():
    root.destroy()

btn = ttk.Button(text="Выход", width = "15", command=closing) 
btn.place(x=240, y=300)

root.mainloop()
