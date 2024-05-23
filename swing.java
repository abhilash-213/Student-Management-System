import java.math.*;
import javax.swing.*;
import java.awt.Font;
import java.awt.event.*;
public class RSAc 
{
	JFrame frame = new JFrame("My First GUI");
	public static void main(String args[]) throws Exception
	{
		new RSAc();
	}
	RSAc() throws Exception
	{

		  frame.setBounds(700,700,700,700);
      JLabel lmsg = new JLabel("The Number to Encrypt &Decrypt :");
		lmsg.setBounds(70, 80, 275, 30);
		lmsg.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(lmsg);
          
      JTextField msgt = new JTextField();
      msgt.setBounds(320, 80, 275, 30);
      msgt.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(msgt); 
       
      JLabel lp = new JLabel("Enter the Value of P :");
		lp.setBounds(70, 140, 275, 30);
		lp.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(lp);
        
      JTextField pp = new JTextField();
		pp.setBounds(300, 140, 275, 30);
		pp.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(pp);
		
		JLabel lq = new JLabel("Enter the Value of Q :");
		lq.setBounds(70, 200, 275, 30);
		lq.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(lq);
        
      JTextField qq = new JTextField();
		qq.setBounds(300, 200, 275, 30);
		qq.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(qq);
		
		JLabel pz = new JLabel("Value of Z :");
		pz.setBounds(70,260, 275, 30);
		pz.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(pz);
		
		JTextField zz = new JTextField();
		zz.setBounds(300, 260, 275, 30);
		zz.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(zz);
		zz.setBorder(null);
		zz.setEditable(false);
		
		JLabel je = new JLabel("Value of E :");
		je.setBounds(70,320, 275, 30);
		je.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(je);
		
		JTextField ee = new JTextField();
		ee.setBounds(300,320, 275, 30);
		ee.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(ee);
		ee.setBorder(null);
		ee.setEditable(false);
		
		JLabel jd = new JLabel("Value of d :");
		jd.setBounds(70,380, 275, 30);
		jd.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(jd);
		
		JTextField dd = new JTextField();
		dd.setBounds(300, 380, 275, 30);
		dd.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(dd);
		dd.setBorder(null);
		dd.setEditable(false);
		
		JLabel en = new JLabel("Encrypted Message :");
		en.setBounds(70,440, 275, 30);
		en.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(en);
		
		JTextField jen = new JTextField();
		jen.setBounds(300, 440, 275, 30);
		jen.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(jen);
		jen.setBorder(null);
		jen.setEditable(false);
		
		JLabel ed = new JLabel("Decrypted Message :");
		ed.setBounds(70,500, 275, 30);
		ed.setFont(new Font("Times New Roman", Font.BOLD, 16));
		frame.add(ed);
		
		JTextField jed = new JTextField();
		jed.setBounds(300, 500, 275, 30);
		jed.setFont(new Font("Times New Roman", Font.PLAIN, 16));
		frame.add(jed);
		jed.setBorder(null);
		jed.setEditable(false);
		
		 JButton encr = new JButton("Encrypt");
		 encr.setBounds(100, 00, 150, 30);
		 encr.addActionListener(new ActionListener() 
	  		{
	  			public void actionPerformed(ActionEvent e1) 
	  			{
	  				int p,q,n,z,d=0,e,i;
	  				int msg=Integer.parseInt(msgt.getText());
	  				double c;
	  				BigInteger msgback;
	  				//p=3;
	  				
	  		          p=Integer.parseInt(pp.getText());
	  		          q = Integer.parseInt(qq.getText());
	  		          msg=Integer.parseInt(lmsg.getText());
	  				//q=11;
	  				n=p*q;
	  				z=(p-1)*(q-1);
	  				
	  				System.out.println("the value of z = " + z);
	  				zz.setText(String.valueOf(z));
	  				for(e=2;e<z;e++) 
	  		          {
	  					if(gcd(e,z)==1) 
	  		               {
	  						break;
	  					}
	  				}
	  				ee.setText(String.valueOf(e));
	  				for(i=0;i<=9;i++) 
	  		          {
	  					int x=1+(i*z);
	  					if(x%e==0) 
	  		               {
	  						d=x/e;
	  						break;
	  					}
	  		          }
	  				dd.setText(String.valueOf(d));
	  				c=(Math.pow(msg, e))%n;
	  				jen.setText(String.valueOf(c));
	  				BigInteger N = BigInteger.valueOf(n);
	  				BigInteger C = BigDecimal.valueOf(c).toBigInteger();
	  				msgback=(C.pow(d)).mod(N);
	  				jed.setText(String.valueOf(msgback));
	  			}
	  		});
	  frame.setVisible(true);
	}
		private static int gcd(int e, int z) 
		{
			if(e==0)
	            return z;
			else
	            return gcd(z%e,e);
		}
}