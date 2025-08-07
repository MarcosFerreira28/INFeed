import styles from './styles.module.css';

export default function Cabecalho() {
    return (
        <div className={styles.cabecalho}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img className={styles.imagem} src="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg" alt="" />
                <div>
                    <h1 className={styles.nome}>Marcos Ferreira</h1>
                    <p className={styles.cargo}>Designer</p>
                </div>
            </div>
            <p className={styles.tempo}>Publicado há 2h</p> {/* colocar data dps */}
        </div>
    )
}