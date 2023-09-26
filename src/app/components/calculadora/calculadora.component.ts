import { Component } from '@angular/core';
import { mascaraMoeda } from 'src/app/utils/functions';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
    total = 0;
    totalAnual = 0;
    todosChecked = false;

    limparInputs() {
        if (!(document.getElementById('switch-inss') as HTMLInputElement).checked) (document.getElementById('input-inss') as HTMLInputElement).value = '';
        if (!(document.getElementById('switch-pis') as HTMLInputElement).checked) (document.getElementById('input-pis') as HTMLInputElement).value = '';
        if (!(document.getElementById('switch-cofins') as HTMLInputElement).checked) (document.getElementById('input-cofins') as HTMLInputElement).value = '';
        if (!(document.getElementById('switch-irpj') as HTMLInputElement).checked) (document.getElementById('input-irpj') as HTMLInputElement).value = '';
        if (!(document.getElementById('switch-csll') as HTMLInputElement).checked) (document.getElementById('input-csll') as HTMLInputElement).value = '';
        if (!(document.getElementById('switch-ipi') as HTMLInputElement).checked) (document.getElementById('input-ipi') as HTMLInputElement).value = '';
    }

    calcular() {
        this.limparInputs();
        console.log((document.getElementById('input-inss') as HTMLInputElement).value);
        console.log((document.getElementById('input-inss') as HTMLInputElement).value.substring(3).replaceAll('.', ''));
        if (!this.todosChecked) {
            const valorInss = Number((document.getElementById('input-inss') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            const valorPis = Number((document.getElementById('input-pis') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            const valorCofins = Number((document.getElementById('input-cofins') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            const valorIrpj = Number((document.getElementById('input-irpj') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            const valorCsll = Number((document.getElementById('input-csll') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            const valorIpi = Number((document.getElementById('input-ipi') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
        
            this.total = valorInss + valorPis + valorCofins + valorIrpj + valorCsll + valorIpi;

            this.totalAnual = (valorPis + valorCofins + valorIrpj + valorCsll + valorIpi) * 12 + valorInss * 13;
        } else {
            this.total = Number((document.getElementById('input-todos') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.'));
            this.totalAnual = Number((document.getElementById('input-todos') as HTMLInputElement).value.substring(3).replaceAll('.', '').replace(',', '.')) * 12;
        }
        console.log(this.total);
    }

    changeSwitch(tipo: string) {
        if (tipo == 'todos') {
            this.todosChecked = !this.todosChecked;
            (document.getElementById('switch-inss') as HTMLInputElement).checked = false;
            (document.getElementById('switch-pis') as HTMLInputElement).checked = false;
            (document.getElementById('switch-cofins') as HTMLInputElement).checked = false;
            (document.getElementById('switch-irpj') as HTMLInputElement).checked = false;
            (document.getElementById('switch-csll') as HTMLInputElement).checked = false;
            (document.getElementById('switch-ipi') as HTMLInputElement).checked = false;
            document.getElementById('ig-inss')?.classList.add('d-none');
            document.getElementById('ig-pis')?.classList.add('d-none');
            document.getElementById('ig-cofins')?.classList.add('d-none');
            document.getElementById('ig-irpj')?.classList.add('d-none');
            document.getElementById('ig-csll')?.classList.add('d-none');
            document.getElementById('ig-ipi')?.classList.add('d-none');
            document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
            return;
        }
        return document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
    }

    mask(event: Event) {
        mascaraMoeda(event);
    }
}
