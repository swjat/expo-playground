// unused import
import { TextInput } from "react-native";

export class TestClass {
    // double and single quotes
    private qwe = "qwe"; // "qwe"
    private asd = "asd"; // 'asd'

    private aMethod(): void {
        // cyclomatic complexity 5
        const a: number = 1;
        if (a == 0) {
            console.log(0);
        } else if (a == 1) {
            console.log(1);
        } else if (a == 2) {
            console.log(2);
            // } else if (a == 3) {
            //     console.log(3);
        } else {
            console.log(0);
        }

        // unused variable
        const b = 2;

        // length 121 (-> over 120)
        const c: string =
            "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccC";
    }
}
