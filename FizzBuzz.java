import java.util.ArrayList;
import java.util.List;

public class FizzBuzz {
    public static List<String> fizzBuzz(int n) {
        var result = new ArrayList<String>();

        for(int i = 1; i <= n; i++) {
            if(i % 3 == 0  && i % 5 == 0) {
                result.add("FizzBuzz");
            } else if(i % 3 == 0) {
                result.add("Fizz");
            } else if(i % 5 == 0) {
                result.add("Buzz");
            } else {
                result.add(String.valueOf(i));
            }
        }

        return result;
    }

    public static void main(String[] args) {
        List<String>  resultOf10 = fizzBuzz(10);
        List<String>  resultOf5 = fizzBuzz(5);
        List<String>  resultOf24 = fizzBuzz(24);

        System.out.println(resultOf10);
        System.out.println(resultOf5);
        System.out.println(resultOf24);
    }
}
