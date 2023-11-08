function displayGeneralQuestions(genQuestions) {
  const genQuesContainer = document.getElementById("gen-questions-container");

  const genQuesAccordians = genQuestions.map((genQue, i) => {
    return `
    <div class="col-md-6">
    <div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#gen-question-${i + 1}"
    > ${genQue.question}
    </button>
  </h2>
  <div id="gen-question-${i + 1}" class="accordion-collapse collapse">
    <div class="accordion-body">
    ${genQue.answer}
    </div>
  </div>
</div>
    </div>`;
  });

  genQuesContainer.innerHTML = genQuesAccordians.join(" ");
}

document.addEventListener(
  "DOMContentLoaded",
  displayGeneralQuestions(genQuestions),
);
