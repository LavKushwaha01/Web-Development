type EventType = 'click' | 'scroll' | 'mouseover' | 'mouseout';
type EventHandler = Exclude<EventType, 'click' | 'scroll'>; // 'mouseover' | 'mouseout'

const EventHandler = (event: EventHandler) => {
    
    switch (event) {
        case 'mouseover':
            console.log('Mouse over event triggered');
            break;
        case 'mouseout':
            console.log('Mouse out event triggered');
            break;
        default:
            console.log('Unknown event');
    }
}

EventHandler('mouseover'); // Valid
EventHandler('mouseout'); // Valid