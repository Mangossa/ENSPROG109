import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class GenerateTableServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int num = Integer.parseInt(request.getParameter("num"));
        String table = MultiplicationTable.generateTable(num);
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Multiplication Table for " + num + "</h1>");
        out.println(table);
        out.println("</body></html>");
    }
}