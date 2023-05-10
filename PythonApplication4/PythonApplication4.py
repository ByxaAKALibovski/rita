import sqlite3 as sl

with sl.connect('days.db') as db: #подключение к бд
    cursor = db.cursor()
    query = """ CREATE TABLE IF NOT EXISTS DoW (D_id INTEGER PRIMARY KEY, Name TEXT NOT NULL, Count INTEGER NOT NULL) """
    cursor.execute(query)

    insert_DoW = [           
        (1, 'Понедельник', 200),
        (2, 'Вторник', 230),
        (3, 'Среда', 890),
        (4, 'Четверг', 50),
        (5, 'Пятница', 120),
        (6, 'Суббота', 60)
    ]

    db.commit()

with sl.connect('days.db') as db: 
    cursor = db.cursor()
    query1 = """ INSERT INTO DoW (D_id, Name, Count) VALUES (?, ?, ?); """
    cursor.executemany(query1, insert_DoW)
    db.commit()

with sl.connect('days.db') as db: #подключение к бд
    cursor = db.cursor()
    query = """ CREATE TABLE IF NOT EXISTS DoW_Sub (DoW_Sub_id INEGER PRIMARY KEY, Title TEXT NOT NULL, D_id INTEGER NOT NULL, FOREIGN KEY (D_id) REFERENCES DoW (D_id) ON DELETE CASCADE ON UPDATE NO ACTION) """
    cursor.execute(query)

    insert_DoW_Sub = [           
        (1, 'Привет', 3),
        (2, 'Пока', 5),
        (3, 'Как дела', 2),
        (4, 'Что делаешь', 6),
    ]

    db.commit()

with sl.connect('days.db') as db: 
    cursor = db.cursor()
    query1 = """ INSERT INTO DoW_Sub (DoW_Sub_id, Title, D_id) VALUES (?, ?, ?); """
    cursor.executemany(query1, insert_DoW_Sub)
    db.commit()








   
#with sl.connect('days.db') as db: 
#    cursor = db.cursor()
#    query = """ DELETE FROM DoW """
#    cursor.execute(query)

