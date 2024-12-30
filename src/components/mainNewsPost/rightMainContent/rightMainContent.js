export default function RightMainContent() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <h2 style={{ fontFamily: 'Neris-Light', fontSize: '20px' }}>Объявления</h2>
            </div>

            {/* FROM */}
            <div style={{ border: 'rgba(0, 0, 0, 0.075) 0.1px solid', marginBlock: '15px' }}></div>

            <div style={{ flexDirection: 'column' }}>
                <div className="card-from-list-imgdiv">
                    <a href="#">
                        <img src="/1.jpg" className="hover-zoom-image" style={{ width: '100%' }} />
                    </a>
                </div>
                <div className="announce-titles">
                    <a href="#">
                        <h2 style={{ fontFamily: 'Neris-Light' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquid iure corporis unde nam labore ad provident qui sequi sit nihil. Sit, a. Dolorum
                            maxime labore, facilis nam sunt quis amet.
                        </h2>
                    </a>
                    <p style={{ fontFamily: 'Futura' }}>01.01.2001</p>
                </div>
            </div>
            {/* TO */}
        </>
    );
}
