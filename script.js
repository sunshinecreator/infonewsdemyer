async function processText() {
  const input = document.getElementById('inputText').value;

  // 加载映射数据（可改为远程加载）
  const response = await fetch('data/mapping.json');
  const mapping = await response.json();

  let output = input;

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  for (const [newWord, oldWord] of Object.entries(mapping)) {
    const regex = new RegExp(escapeRegExp(newWord), 'g');
    output = output.replace(regex, oldWord);
  }

  document.getElementById('outputText').textContent = output;
}
