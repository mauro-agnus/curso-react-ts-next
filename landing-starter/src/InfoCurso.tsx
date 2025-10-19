interface PropInfo{
  tecnologia:string;
}
function InfoCurso({tecnologia}:PropInfo) {
  return (
    <section>
      <h3>Curso de {tecnologia}</h3>
      <p>Aprendiendo paso a paso desde cero.</p>
    </section>
  );
}

export default InfoCurso;