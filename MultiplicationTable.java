public class MultiplicationTable {
    public static String generateTable(int num) {
        StringBuilder table = new StringBuilder();
        table.append("<table>");
        for (int i = 1; i <= 10; i++) {
            table.append("<tr><td>")
                 .append(num)
                 .append(" x ")
                 .append(i)
                 .append("</td><td>")
                 .append(num * i)
                 .append("</td></tr>");
        }
        table.append("</table>");
        return table.toString();
    }
}