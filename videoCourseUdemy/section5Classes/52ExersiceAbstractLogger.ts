/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
 */

abstract class Logger {
    abstract log(message: string): void;


    printDate(date: Date): void {
        // Convert date to string and output it
        this.log(date.toString());
    }
}

class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(message); // Output the message to the console
    }

    logWithDate(message: string): void {
        const currentDate = new Date(); // Get the current date
        this.printDate(currentDate);    // Output the date using the parent method
        this.log(message);              // Output the message itself
    }
}

// Create an instance of ConsoleLogger
const logger = new ConsoleLogger();

// Use the logWithDate method
logger.logWithDate("This is a message with a date");
