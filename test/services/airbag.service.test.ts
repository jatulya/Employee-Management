import { AirbagService, AirbagIgniter, AirbagResult, CrashSensor } from "../../services/airbag.services";
import {mock, MockProxy} from 'jest-mock-extended'
import {when} from 'jest-when'

describe('AirbagService', () => {

    let service: AirbagService    
    let sensorMock: MockProxy<CrashSensor>
    let igniterMock : MockProxy<AirbagIgniter>

    beforeEach(() => {
        sensorMock = mock<CrashSensor>()
        igniterMock = mock<AirbagIgniter>()
        service = new AirbagService(sensorMock, igniterMock)
    })

    it('Deploys air bag when car crash is detected', () => {
        //arrange
        when(sensorMock.isCrashDetected).calledWith().mockReturnValue(true)
        //act
        const result = service.deployAirbag()
        //assert ==> comparing if result is equal to 
        expect(result).toEqual({triggered : true, force : 100, timing: 50})
        expect(sensorMock.isCrashDetected).toHaveBeenCalled();
        expect(igniterMock.trigger).toHaveBeenCalledWith(100, 50);
    })

    it('does not deploy the air bag when no car crash is detected', () => {

        when(sensorMock.isCrashDetected).calledWith().mockReturnValue(false)
        const result = service.deployAirbag()
        expect(result).toEqual({triggered : false})
        expect(sensorMock.isCrashDetected).toHaveBeenCalled();        
        expect(igniterMock.trigger).not.toHaveBeenCalled()
    })
})