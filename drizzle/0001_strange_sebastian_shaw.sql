CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`password` text(8) NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`email` text NOT NULL
);
