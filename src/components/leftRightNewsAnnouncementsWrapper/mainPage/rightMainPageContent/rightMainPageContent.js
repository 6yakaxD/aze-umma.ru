import style from './rightMainPageContent.module.scss'
import AnnouncementElement
    from "@/components/leftRightNewsAnnouncementsWrapper/newsElementsDetails/announcementElement";

export default function RightMainPageContent() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <h2 style={{ fontFamily: 'Neris-Light', fontSize: '20px' }}>Объявления</h2>
            </div>

            <AnnouncementElement></AnnouncementElement>
            <AnnouncementElement></AnnouncementElement>
        </>
    );
}
