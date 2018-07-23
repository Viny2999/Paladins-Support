<?PHP
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: ".$_POST["nome"]." <".$_POST["email"].">\r\n";

$assunto = "Mensagem Site Paladins Support";
$paranome = "Viny";
$paraemail = "viny2999@gmail.com";

if( mail($paranome."<".$paraemail.">", $assunto,
	"<html><head></head><body>
	<b>Assunto:</b> ".$assunto."<br />
    <b>Nome:</b> ".$_POST["nome"]."<br />
	<b>Nickname:</b> ".$_POST["nick"]."<br />    
	<b>E-Mail:</b> ".$_POST["email"]."<br />
	<b>Mensagem:</b><br />".nl2br($_POST["msg"])."<br /><br />
	<b>IP</b>: " . $_SERVER['REMOTE_ADDR'] . "<br />
	<b>Detalhes</b>: " . htmlentities($_SERVER['HTTP_USER_AGENT']) . "<br />
	</body></html>", $headers)) {

	echo "E-Mail enviado com sucesso!";

} else {

	echo "E-Mail NÃO FOI enviado com sucesso!";

}
?>