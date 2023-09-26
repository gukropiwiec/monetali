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
    impostos = [
        'inss',
        'pis',
        'cofins',
        'irpj',
        'csll',
        'ipi'
    ];

    limparInputs() {
        for (const imposto of this.impostos) {
            if (!(document.getElementById(`switch-${imposto}`) as HTMLInputElement).checked) {
                (document.getElementById(`input-${imposto}`) as HTMLInputElement).value = '';
            } 
        }
    }

    calcular() {
        this.limparInputs();
        if (!this.todosChecked) {
            const valores: { [key: string]: number } = {};
            for (const imposto of this.impostos) {
                valores[imposto] = this.parseInputValue(`input-${imposto}`);
            }
        
            this.total = Object.values(valores).reduce((a, b) => a + b, 0);

            this.totalAnual = (valores['pis'] + valores['cofins'] + valores['irpj'] + valores['csll'] + valores['ipi']) * 12 + valores['inss'] * 13;
        } else {
            const valorTotalTodos = this.parseInputValue('input-todos');
            this.total = valorTotalTodos;
            this.totalAnual = valorTotalTodos * 12;
        }
    }

    changeSwitch(tipo: string) {
        if (tipo == 'todos') {
            this.todosChecked = !this.todosChecked;
            for (const imposto of this.impostos) {
                (document.getElementById(`switch-${imposto}`) as HTMLInputElement).checked = false;
                document.getElementById(`ig-${imposto}`)?.classList.add('d-none');
            }
            document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
            return;
        }
        return document.getElementById(`ig-${tipo}`)?.classList.toggle('d-none');
    }

    mask(event: Event) {
        mascaraMoeda(event);
    }
    
    private parseInputValue(inputId: string): number {
        const inputElement = document.getElementById(inputId) as HTMLInputElement;
        return Number(inputElement.value.substring(3).replaceAll('.', '').replace(',', '.'));
    }
}
