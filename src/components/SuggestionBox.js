function SuggestionBox({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  if (tasks.length === 0) {
    return <p>Henüz görev eklemedin</p>;
  }
  if (completedTasks.length === 0) {
    return (
      <p>Henüz hiçbir görevi tamamlamadın.Bugün küçük bir hedefle başla</p>
    );
  }

  const categoryTotals = completedTasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + Number(task.duration);

    return acc;
  }, {});

  const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  let message = "";

  if (topCategory === "Work") {
    message = "Bu hafta işe çok odaklandın — müthiş!";
  } else if (topCategory === "Study") {
    message = "Çalışmalarında istikrarlısın, devam et!";
  } else if (topCategory === "Exercise") {
    message = "Aktif bir hafta geçiriyorsun ";
  } else if (topCategory === "Leisure") {
    message = "Biraz dinlenmeye vakit ayırman çok iyi ";
  }

  return (
    <div className="suggestion-box">
      <h3> Haftalık Öneri</h3>
      <p>{message}</p>
    </div>
  );
}
export default SuggestionBox;
