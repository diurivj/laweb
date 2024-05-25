# Ejercicio de queries

Esta actividad consiste en aprender como ejecutar queries de SQL mediante la terminal y mediante la interfaz interactiva de turso.

## Instrucciones

1. Crear la base de datos:

```bash
turso db create db-exercise
```

2. Acceder a la base de datos:

```bash
turso db shell db-exercise
```

3. Una vez dentro de la base de datos correr el siguient comando:

```sql
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "__drizzle_migrations" (
			id SERIAL PRIMARY KEY,
			hash text NOT NULL,
			created_at numeric
		);
INSERT INTO __drizzle_migrations VALUES(NULL,'37bb57c0ed362aaf6b9c5c58af4f2ecb904b755b945ee3cda779a99067c70f14',1716617689940);
CREATE TABLE IF NOT EXISTS `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`text` text,
	`author_id` integer,
	`post_id` integer
);
INSERT INTO comments VALUES(1,'alv que rico',1,4);
INSERT INTO comments VALUES(2,'gpi',3,4);
INSERT INTO comments VALUES(3,'jeje saludos',4,4);
INSERT INTO comments VALUES(4,'deja el chocho amigo',5,4);
INSERT INTO comments VALUES(5,'gpi',4,1);
INSERT INTO comments VALUES(6,'saludos hasta alla pariente',4,2);
CREATE TABLE IF NOT EXISTS `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`description` text,
	`photo` text NOT NULL,
	`author_id` integer,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL
);
INSERT INTO posts VALUES(1,NULL,NULL,'https://images.unsplash.com/photo-1586136194012-35ceaddbd773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D',6,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO posts VALUES(2,'Vinimos a echar el taquito',NULL,'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D',2,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO posts VALUES(3,'Viviendo la vida loca',NULL,'https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D',2,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO posts VALUES(4,'Poniendo en forma el cuerpatzo',NULL,'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww',2,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO posts VALUES(5,'.',NULL,'https://images.unsplash.com/photo-1545137418-4f1e60820cd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBleHxlbnwwfHwwfHx8MA%3D%3D',7,'2024-05-25 06:29:24','2024-05-25 06:29:24');
CREATE TABLE IF NOT EXISTS `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text,
	`profile_photo` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL
);
INSERT INTO users VALUES(1,'diurivj','diurivj@gmail.com','Diego','Vazquez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(2,'mike','mike@gmail.com','Miguel','Gonzalez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(3,'imperial','imperial@gmail.com','Ulises','Vazquez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(4,'lapao','lapao@gmail.com','Paola','Vazquez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(5,'elkandres','elkandres@gmail.com','Andres','Hernandez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(6,'elbeto','elbeto@gmail.com','Alberto','Sanchez',NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
INSERT INTO users VALUES(7,'ryan','ryan@gmail.com','Ryan',NULL,NULL,'2024-05-25 06:29:24','2024-05-25 06:29:24');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('users',7);
INSERT INTO sqlite_sequence VALUES('posts',5);
INSERT INTO sqlite_sequence VALUES('comments',6);
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
CREATE UNIQUE INDEX `username_idx` ON `users` (`username`);
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);
COMMIT;
```

4. Confirmar que las tablas se hayan creado.

```sql
.tables
```

5. Listo, es tiempo de hacer unas busquedas dentro de la base de datos

```bash
# Query 1
# Find the brothers: Find all the users that their lastname is Vazquez.
# Note: Keep in mind the lastname, in specific the first character of the lastname.

# Query 2
# How many brothers: COUNT the total rows that matched the previous query. (The query would be like: SELECT COUNT(*) ...)
# Note: Do not forget this number.

# Query 3
# Find the orphan: Find the user that does not have a lastname.
# Note: What is the last character of their name?

# Query 4
# Who is the influencer?: Find the user with most posts created.
# Note: Do not forget the first character of their lastname

# Query 5
# Did their post engage?: How many comments do their latest post had?
# Notes: What is the number?

# Query 6
# Who is the most hipster?: Find the user with less posts created.
# Note: Save the first character of their first name.

# Query 7
# Who is the most chatty?: Find the user that comments more in posts.
# Note: And their first name ends with....

# Query 8
# Who has used the app since the beginning?: Find the person that created the first post ever.
# Note: Remember the last character of their lastname.

# Query 9
# What is the post with most comments in it?
# Note: How many?
```

Happy coding 😎, S lo hiciste bien, cual es la frase secreta?
