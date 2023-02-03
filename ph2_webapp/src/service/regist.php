<?
$input_json = file_get_contents('php://input');
$post = json_decode( $input_json, true );

require_once(__DIR__ . '/../db/pdo.php');
$db = getDb();
require_once(__DIR__ . '/../define.php');

try {
  for ($contentsNum = 0; $contentsNum < $post['contentsCount']; $contentsNum++) {
    $stt = $db->prepare("INSERT INTO studyHours VALUE (NULL, :studyHour, :languages, :contents, :learnDate)");
    $stt->bindValue(":studyHour", $post['studyHours']);
    $stt->bindValue(":languages", array_search($post['languages'], Define::$languages));
    $stt->bindValue(":contents", array_search($post['contents'][$contentsNum], Define::$contents));
    $stt->bindValue(":learnDate", $post['date']);
    $stt->execute();
  }

  echo json_encode('ok');

} catch(PDOException $e) {
  return false;
} 
