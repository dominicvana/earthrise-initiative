export const missionStatementAnimation = async () => {
  const missionStatement = document.querySelector('.hero__mission-statement');
  let i = 0;
  const text = 'global shift towards equality of consideration for all';
  const speed = 34;

  async function typingEffect() {
    if (i < text.length) {
      missionStatement.textContent += text.charAt(i);
      i++;
      setTimeout(typingEffect, speed);
    }
  }

  function transform(pxVal = 0, transition = 'transform 1.75s ease-out') {
    missionStatement.style.transform = `translateY(${pxVal}px`;
    missionStatement.style.transition = transition;
  }

  const delay = 2600;
  await typingEffect().then(setTimeout(transform, delay));
};
