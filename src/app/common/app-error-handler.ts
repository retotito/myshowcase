import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError (error) {
        console.log("an unexpected error occured");
        console.log(error);
    }
}
