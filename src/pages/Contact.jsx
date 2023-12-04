export default function Contact() {
    return (
        <>
            <h2>Contact</h2>
            <section>
                <form>
                    <div>
                        <div>
                            <div>
                                <h3>Name</h3>
                                <input type='text' />
                            </div>
                            <div>
                                <h3>Message</h3>
                                <textarea type='text' />
                            </div>
                            <div>
                                <button type='submit'>submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}